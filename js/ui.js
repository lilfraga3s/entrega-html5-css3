/* ui.js */
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.btn-hamburger').forEach(function(btn){
    btn.addEventListener('click', function(){
      var id = btn.getAttribute('aria-controls');
      var nav = document.getElementById(id) || document.querySelector('.nav-list');
      if(nav) nav.classList.toggle('open');
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
    });
  });

  document.querySelectorAll('[data-open-modal]').forEach(function(b){
    b.addEventListener('click', function(){
      var id = b.getAttribute('data-open-modal');
      openModal(id);
    });
  });

  document.querySelectorAll('[data-close-modal], .modal-close').forEach(function(b){
    b.addEventListener('click', function(){
      var modal = b.closest('.modal');
      if(modal) closeModal(modal.id);
    });
  });

  document.querySelectorAll('.modal').forEach(function(modal){
    modal.addEventListener('click', function(e){
      if(e.target === modal) closeModal(modal.id);
    });
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') document.querySelectorAll('.modal[aria-hidden="false"]').forEach(m=>closeModal(m.id));
  });
});

function openModal(id){
  var modal = document.getElementById(id);
  if(!modal) return;
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeModal(id){
  if(!id) return;
  var modal = document.getElementById(id);
  if(!modal) return;
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

// Toasts
function showToast(message, type='success', timeout=3500){
  var area = document.getElementById('toast-area');
  if(!area){ console.warn('Toast area not found'); return; }
  var toast = document.createElement('div');
  toast.className = 'toast ' + (type==='danger' ? 'danger' : 'success');
  toast.textContent = message;
  area.appendChild(toast);
  setTimeout(function(){ toast.remove(); }, timeout);
}
