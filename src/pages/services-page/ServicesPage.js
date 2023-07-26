import { Hero } from '../../components/hero'
import classes from './ServicesPage.module.css'

function ServicesPage() {
  return (
    <div>
      <Hero heading='Usluge' />

      <div className={classes.container}>
        <p className={classes.gender}>Muškarci</p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          officia cupiditate laboriosam quia aperiam repudiandae, obcaecati
          nostrum perspiciatis minus eaque animi? Qui, blanditiis at vel sunt
          similique ducimus. A, illum laborum tenetur quibusdam nobis esse
          doloribus incidunt facere laudantium exercitationem, enim, possimus
          earum? Repudiandae nisi perspiciatis excepturi corrupti nostrum culpa
          vitae a, molestias modi sit tenetur ea natus animi sequi.
        </p>

        <p className={classes.gender}>Žene</p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          officia cupiditate laboriosam quia aperiam repudiandae, obcaecati
          nostrum perspiciatis minus eaque animi? Qui, blanditiis at vel sunt
          similique ducimus. A, illum laborum tenetur quibusdam nobis esse
          doloribus incidunt facere laudantium exercitationem, enim, possimus
          earum? Repudiandae nisi perspiciatis excepturi corrupti nostrum culpa
          vitae a, molestias modi sit tenetur ea natus animi sequi.
        </p>

        <p className={classes.gender}>Deca</p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          officia cupiditate laboriosam quia aperiam repudiandae, obcaecati
          nostrum perspiciatis minus eaque animi? Qui, blanditiis at vel sunt
          similique ducimus. A, illum laborum tenetur quibusdam nobis esse
          doloribus incidunt facere laudantium exercitationem, enim, possimus
          earum? Repudiandae nisi perspiciatis excepturi corrupti nostrum culpa
          vitae a, molestias modi sit tenetur ea natus animi sequi.
        </p>
      </div>
    </div>
  )
}

export default ServicesPage
