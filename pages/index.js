import fetch from 'isomorphic-unfetch'
import Error from 'next/error'

import StoryList from '../components/StoryList'

const hackerNewsAPI = 'https://node-hnapi.herokuapp.com/news'

class Index extends React.Component {
  static async getInitialProps() {
    let stories
    try {
      const res = await fetch(`${hackerNewsAPI}?page=1`)
      stories = await res.json()
    } catch (err) {
      console.log(err)
      stories = []
    }
    return { stories }
  }

  render() {
    const { stories } = this.props

    if (stories.length === 0) {
      return <Error statusCode={503} />
    }

    return (
      <div>
        <h1>Hacker next</h1>
        <StoryList stories={stories} />
      </div>
    )
  }
}

export default Index
