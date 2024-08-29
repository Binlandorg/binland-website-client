import { LazyLoadImage } from 'react-lazy-load-image-component'
const Article: React.FC = () => {
  return (
    <>
      <section id="hero-section">
        <div>
          <div>
            <p>Mariano Sevallos S. - 27 de febrero de 2024</p>
            <button>boton con icono dentro</button>
          </div>
          <span>
            Intervalos consistido id existencia superiores victorioso la
            chabacanos lo.
          </span>
          <div>icons here</div>
        </div>
      </section>
      <section id="article-section">
        <aside>
          <h5>Tabla de contenidos</h5>
          <div>
            <div>Sospechar</div>
            {/* cada uno debe tener un id para redirigir */}
            <div>
              {/*cuando le daas click debe abrir */}
              <ul>
                <li>Contado</li>
                <li>Teatro de sat</li>
                <li>observaba</li>
              </ul>
            </div>
            <div>Tropezando</div>
            <div>Ghorgeggi</div>
            <div>Moralmente</div>
          </div>
        </aside>
        <main>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              facilis accusantium assumenda itaque aspernatur, aut harum nemo
              quasi omnis, debitis dolore tempore quibusdam porro! Eos aliquid
              numquam expedita repudiandae inventore?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              facilis accusantium assumenda itaque aspernatur, aut harum nemo
              quasi omnis, debitis dolore tempore quibusdam porro! Eos aliquid
              numquam expedita repudiandae inventore?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              facilis accusantium assumenda itaque aspernatur, aut harum nemo
              quasi omnis, debitis dolore tempore quibusdam porro! Eos aliquid
              numquam expedita repudiandae inventore?
            </p>
            <figure>
              <LazyLoadImage src="" alt="" />
              <figcaption>fiaba dicho bueno no conta id ciego un</figcaption>
            </figure>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              ducimus soluta et est repellat esse dolore? Animi laborum,
              expedita officiis porro quod rem minima quibusdam repellendus. Hic
              consequatur sit quis?
            </p>
            <div>
              {/**aqui se pondran las tags */}
              <span>Blog</span>
              <span>Binland</span>
              <span>Hashtag</span>
              <span>Articulo</span>
              <span>Ejemplo</span>
            </div>
          </div>
        </main>
      </section>
      <section id="comments-section">
        <div>
          <h5>¿Te gustó este artículo?</h5> <span>icono like</span>
          <span>icono deslike</span>
        </div>
        {/**cuestionable si la línea debe ser un borde o un hr  */}
        <div>
          <input type="text" placeholder="que te pareció este articulo" />
          <button>comentar</button>
        </div>
        <div>
          {/**esto solo debe aparecer si es que hay comentarios */}
          <div>
            <div>
              <h5>Mariano Sevallos S. </h5>
              <p>- Publicado el 7 de febrero del 2024</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              asperiores sunt aperiam alias, placeat in nam repellendus
              assumenda architecto mollitia perspiciatis laudantium suscipit
              tempora nisi magnam temporibus numquam, atque ullam?
            </p>
            <button>Responder</button>
          </div>
          <div>
            {/** si en caso hubieran respuestas */}
            <div>
              <div>
                <span>Mariano Sevallos S. </span>- Publicado el 7 de febrero del
                2024
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                asperiores sunt aperiam alias, placeat in nam repellendus
                assumenda architecto mollitia perspiciatis laudantium suscipit
                tempora nisi magnam temporibus numquam, atque ullam?
              </p>
              <button>Responder</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Articulos relacionados</h3>
        <div>
          <div>Card of blog</div>
        </div>
      </section>
    </>
  )
}

export default Article
