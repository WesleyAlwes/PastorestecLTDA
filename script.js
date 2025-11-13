document.addEventListener('DOMContentLoaded', function() {
    const btnOcultar = document.getElementById('ocultarBarra');
    const topo = document.querySelector('.topo');
    let topoVisivel = true;

    if (btnOcultar && topo) {
        const iconHTML = btnOcultar.querySelector('.iconbtn')?.outerHTML || '';
        
        btnOcultar.addEventListener('click', function() {
            topoVisivel = !topoVisivel;
            topo.style.display = topoVisivel ? 'flex' : 'none';
            btnOcultar.innerHTML = `${iconHTML} ${topoVisivel ? '☰ Ocultar barra' : '☰ Mostrar barra'}`;
        });
    }

    const btnPaginaInicial = document.getElementById('paginaInicial');
    if (btnPaginaInicial) {
        btnPaginaInicial.addEventListener('click', function(e) {
            e.preventDefault();
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Você será redirecionado para a página inicial",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => window.location.href = "index.html");
            } else {
                if (confirm('Voltar para a página inicial?')) {
                    window.location.href = "index.html";
                }
            }
        });
    }

    const emailTest = 'teste@exemplo.com';
    const senhaTest = '123456';

    function exibirAlerta(tipo, titulo, texto = '') {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                icon: tipo,
                title: titulo,
                text: texto,
                timer: tipo === 'success' ? 1200 : undefined,
                showConfirmButton: tipo !== 'success'
            });
        } else {
            alert(`${titulo}${texto ? '\n' + texto : ''}`);
        }
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email')?.value.trim() || '';
            const senha = document.getElementById('senha')?.value || '';

            if (!email || !senha) {
                exibirAlerta('warning', 'Preencha todos os campos');
                return;
            }

            const emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(email)) {
                exibirAlerta('error', 'Email inválido');
                return;
            }

            if (senha.length < 6) {
                exibirAlerta('error', 'Senha deve ter no mínimo 6 caracteres');
                return;
            }

            if (email === emailTest && senha === senhaTest) {
                exibirAlerta('success', 'Login efetuado com sucesso!');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1200);
            } else {
                exibirAlerta('error', 'Credenciais inválidas', 'Tente: teste@exemplo.com / 123456');
            }
        });
    }

    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nome = cadastroForm.querySelector('input[type="text"]')?.value.trim() || '';
            const email = cadastroForm.querySelector('input[type="email"]')?.value.trim() || '';
            const senha1 = cadastroForm.querySelectorAll('input[type="password"]')[0]?.value || '';
            const senha2 = cadastroForm.querySelectorAll('input[type="password"]')[1]?.value || '';

          
            if (!nome || !email || !senha1 || !senha2) {
                exibirAlerta('warning', 'Preencha todos os campos');
                return;
            }

            const emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(email)) {
                exibirAlerta('error', 'Email inválido');
                return;
            }

            if (senha1.length < 6) {
                exibirAlerta('error', 'Senha deve ter no mínimo 6 caracteres');
                return;
            }

            if (senha1 !== senha2) {
                exibirAlerta('error', 'As senhas não coincidem');
                return;
            }

            
            exibirAlerta('success', 'Cadastro realizado com sucesso!');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1200);
        });
    }
});
function manutencao() {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'info',
            title: 'Página em manutenção',
            text: 'Esta página está temporariamente indisponível. Por favor, tente novamente mais tarde.'
        });
    } else {
        alert('Página em manutenção: Esta página está temporariamente indisponível. Por favor, tente novamente mais tarde.');
    }
  }