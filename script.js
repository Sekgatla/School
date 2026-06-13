// Navigation active state
function setActive(page) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const target = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (target) target.classList.add('active');
}

// Toast notification
function showToast(title, body) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('.toast-title').textContent = title;
  toast.querySelector('.toast-body').textContent = body;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// Modal helpers
function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.classList.add('open');
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.classList.remove('open');
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// Login tabs
const tabs = document.querySelectorAll('.login-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
if (tabs.length) {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (loginForm && registerForm) {
        if (tab.dataset.tab === 'login') {
          loginForm.style.display = '';
          registerForm.style.display = 'none';
        } else {
          loginForm.style.display = 'none';
          registerForm.style.display = '';
        }
      }
    });
  });
}

// Search filter
const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const q = this.value.toLowerCase();
    document.querySelectorAll('[data-searchable]').forEach(el => {
      const text = el.textContent.toLowerCase();
      el.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

// Filter by subject
const filterSelect = document.getElementById('filter-select');
if (filterSelect) {
  filterSelect.addEventListener('change', function () {
    const val = this.value;
    document.querySelectorAll('.class-section').forEach(section => {
      if (!val || section.dataset.class === val) {
        section.style.display = '';
      } else {
        section.style.display = 'none';
      }
    });
  });
}
