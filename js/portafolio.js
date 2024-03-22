const modal = document.getElementById('modal');

const proyecto1 = document.getElementById('proyecto1');
const proyecto2 = document.getElementById('proyecto2');
const proyecto3 = document.getElementById('proyecto3');
const proyecto4 = document.getElementById('proyecto4');
const proyecto5 = document.getElementById('proyecto5');
const proyecto6 = document.getElementById('proyecto6');


proyecto1.addEventListener('click', () =>{
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-bg">
                <div class="modal-proyecto">
                    <div class="modal-proyecto__img">
                        <img src="https://neiverperalta.vercel.app/images/RevNotes.png" alt="">
                    </div>

                    <div class="texto-contenedor">
                        <h2 translate="no">RevNotes</h2>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident minima iure rerum aperiam modi cumque eius, corrupti doloribus. Distinctio ut dolores nemo error sed pariatur ipsa culpa impedit nisi.</p>

                        <div class="links">
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 19l18 0" />
                                    <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="x" class="x">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
            </div>
    `;
    let x = document.getElementById('x');
    let bg = document.getElementById('modal-bg');

    x.addEventListener('click', () =>{
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e) =>{
        if(e.target.id === "modal-bg"){
            modal.innerHTML = '';
        }
    })
})

proyecto2.addEventListener('click', () => {
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-bg">
                <div class="modal-proyecto">
                    <div class="modal-proyecto__img">
                        <img src="https://neiverperalta.vercel.app/images/MovieApp.png" alt="">
                    </div>

                    <div class="texto-contenedor">
                        <h2 translate="no">MovieApp</h2>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident minima iure rerum aperiam modi cumque eius, corrupti doloribus. Distinctio ut dolores nemo error sed pariatur ipsa culpa impedit nisi.</p>

                        <div class="links">
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 19l18 0" />
                                    <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="x" class="x">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
            </div>
    `;
    let x = document.getElementById('x');
    let bg = document.getElementById('modal-bg');

    x.addEventListener('click', () => {
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e) => {
        if (e.target.id === "modal-bg") {
            modal.innerHTML = '';
        }
    })
})

proyecto3.addEventListener('click', () => {
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-bg">
                <div class="modal-proyecto">
                    <div class="modal-proyecto__img">
                        <img src="https://neiverperalta.vercel.app/images/BienesRaices.png" alt="">
                    </div>

                    <div class="texto-contenedor">
                        <h2 translate="no">RealState</h2>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident minima iure rerum aperiam modi cumque eius, corrupti doloribus. Distinctio ut dolores nemo error sed pariatur ipsa culpa impedit nisi.</p>

                        <div class="links">
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 19l18 0" />
                                    <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="x" class="x">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
            </div>
    `;
    let x = document.getElementById('x');
    let bg = document.getElementById('modal-bg');

    x.addEventListener('click', () => {
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e) => {
        if (e.target.id === "modal-bg") {
            modal.innerHTML = '';
        }
    })
})

proyecto4.addEventListener('click', () => {
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-bg">
                <div class="modal-proyecto">
                    <div class="modal-proyecto__img">
                        <img src="https://neiverperalta.vercel.app/images/SimplePhisycs.png" alt="">
                    </div>

                    <div class="texto-contenedor">
                        <h2 translate="no">Simple Phisycs</h2>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident minima iure rerum aperiam modi cumque eius, corrupti doloribus. Distinctio ut dolores nemo error sed pariatur ipsa culpa impedit nisi.</p>

                        <div class="links">
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 19l18 0" />
                                    <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="x" class="x">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
            </div>
    `;
    let x = document.getElementById('x');
    let bg = document.getElementById('modal-bg');

    x.addEventListener('click', () => {
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e) => {
        if (e.target.id === "modal-bg") {
            modal.innerHTML = '';
        }
    })
})

proyecto5.addEventListener('click', () => {
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-bg">
                <div class="modal-proyecto">
                    <div class="modal-proyecto__img">
                        <img src="https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2023/01/sitio-web-de-sensei.webp" alt="">
                    </div>

                    <div class="texto-contenedor">
                        <h2 translate="no">Desing</h2>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident minima iure rerum aperiam modi cumque eius, corrupti doloribus. Distinctio ut dolores nemo error sed pariatur ipsa culpa impedit nisi.</p>

                        <div class="links">
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 19l18 0" />
                                    <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="x" class="x">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
            </div>
    `;
    let x = document.getElementById('x');
    let bg = document.getElementById('modal-bg');

    x.addEventListener('click', () => {
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e) => {
        if (e.target.id === "modal-bg") {
            modal.innerHTML = '';
        }
    })
})

proyecto6.addEventListener('click', () => {
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-bg">
                <div class="modal-proyecto">
                    <div class="modal-proyecto__img">
                        <img src="https://neiverperalta.vercel.app/images/HENRRY.png" alt="">
                    </div>

                    <div class="texto-contenedor">
                        <h2>Henrry (videogame)</h2>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident minima iure rerum aperiam modi cumque eius, corrupti doloribus. Distinctio ut dolores nemo error sed pariatur ipsa culpa impedit nisi.</p>

                        <div class="links">
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                            <a target="_blank" href="https://github.com/RevienMaker">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 19l18 0" />
                                    <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="x" class="x">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
            </div>
    `;
    let x = document.getElementById('x');
    let bg = document.getElementById('modal-bg');

    x.addEventListener('click', () => {
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e) => {
        if (e.target.id === "modal-bg") {
            modal.innerHTML = '';
        }
    })
})