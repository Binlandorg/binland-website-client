import Section from 'ui/Section/Section'
import { BlogHero, BlogWrapper } from './Blog.styles'
import Subscribe from './Subscribe/Subscribe'

const Blog: React.FC = () => {
  return (
    <BlogWrapper size="xl" isfullwidth>
      <Section size="sm" type="margin">
        <BlogHero>
          <h1 className="hero__title">blog</h1>
        </BlogHero>
      </Section>
      <div>
        <input type="search" />
        {/*questionable if the search will be performed within the component pagination */}
      </div>
      <div>Pagination component</div>
      <Subscribe />
    </BlogWrapper>
  )
}

export default Blog
