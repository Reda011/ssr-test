import axios from 'axios'

// 
// import axiosOriginal from 'axios'
// import adapter from 'axios/lib/adapters/xhr'
// const axios = axiosOriginal.create({ adapter })

const searchSubjects = 'https://movie.douban.com/j/search_subjects'

export function top20 () {
    console.log('1111');
  return axios.get(searchSubjects, {
    params: {
      type: 'movie',
      tag: '豆瓣高分',
      sort: 'rank',
      page_limit: 20,
      page_start: 0
    }
  })
}