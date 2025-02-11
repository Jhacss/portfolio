const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
    try {
        const dadosPerfil = await fetch("https://api.github.com/users/Jhacss");
        const perfil = await dadosPerfil.json();

        let conteudo = `

        <!-- Imagem da Seção Sobre -->
                <img
                    src="${perfil.avatar_url}"
                    alt="Foto do Perfil do Github - ${perfil.name}"
                />

                <!-- Texto da Seção Sobre -->
                <article id="about_texto">
                    <h2>Sobre mim</h2>
                    <p>
                        Meu nome é João Henrique, e sou apaixonado por
                        tecnologia e resolução de problemas. Atualmente, curso
                        Análise e Desenvolvimento de Sistemas na UFBRA e estou
                        complementando minha formação com um bootcamp intensivo
                        de desenvolvimento full stack. Tenho desenvolvido
                        habilidades em JavaScript, Node.js, React e SQL, e estou
                        sempre buscando aprender e aplicar novas tecnologias em
                        projetos que impactem positivamente o ambiente ao meu
                        redor
                    </p>

                    <!-- Detalhes do Github -->
                    <div id="about_github" class="flex sobre_github">
                        <a
                            href="${perfil.html_url}"
                            target="_blank"
                            class="botao"
                        >
                            Github
                        </a>
                        <p>${perfil.followers} Seguidores</p>
                        <p>${perfil.public_repos} Repositórios</p>
                    </div>
                </article>
        `;
        sobre.innerHTML += conteudo;
    } catch (error) {
        console.error(error);
    }
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if (campoNome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido";
        txtNome.style.color = "red";
        campoNome.focus();
        return;
    } else {
        txtNome.innerHTML = "";
    }

    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = "Email inválido";
        txtEmail.style.color = "red";
        campoEmail.focus();
        return;
    } else {
        txtEmail.innerHTML = "";
    }

    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");

    if (campoAssunto.value.length < 5) {
        txtAssunto.innerHTML =
            "Assunto inválido, é necessário ter no mínimo 5 caracteres";
        txtAssunto.style.color = "red";
        campoAssunto.focus();
        return;
    } else {
        txtAssunto.innerHTML = "";
    }

    formulario.submit();
});

getApiGithub();
