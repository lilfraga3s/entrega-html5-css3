/* masks.js */
function setCursorToEnd(el){ if (typeof el.selectionStart == 'number') { el.selectionStart = el.selectionEnd = el.value.length; } }
function maskCpf(v){v=v.replace(/\D/g,'');v=v.replace(/(\d{3})(\d)/,'$1.$2');v=v.replace(/(\d{3})(\d)/,'$1.$2');v=v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');return v;}
function maskTel(v){v=v.replace(/\D/g,'');v=v.replace(/^(\d{2})(\d)/,'($1) $2');v=v.replace(/(\d{5})(\d)/,'$1-$2');return v;}
function maskCep(v){v=v.replace(/\D/g,'');v=v.replace(/(\d{5})(\d)/,'$1-$2');return v;}
document.addEventListener('input',function(e){const t=e.target;if(t.id==='cpf'){t.value=maskCpf(t.value);setCursorToEnd(t);}if(t.id==='telefone'){t.value=maskTel(t.value);setCursorToEnd(t);}if(t.id==='cep'){t.value=maskCep(t.value);setCursorToEnd(t);}});
