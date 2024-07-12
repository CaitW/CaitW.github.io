import { Resume } from '@types'

const getDiff = (startDate: Date) => {
  const diff = new Date().getTime() - startDate.getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (years > 0) {
    const remainingMonths = months - years * 12
    return `${years} years ${remainingMonths} months`
  } else {
    return `${months} months`
  }
}
const geospanLength = getDiff(new Date('2024-02-01'))
const contractingLength = getDiff(new Date('2014-11-01'))

export const RESUME: Resume = {
  contact: [
    { label: 'Email', link: 'mailto:wolters.caitlin@gmail.com' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/caitlinwolters/' },
  ],
  sections: [
    {
      children: [
        {
          body: ['Javascript, React, Typescript, Webpack, Redux, Angular'],
          title: 'Frontend',
        },
        {
          body: ['HTML5, CSS, Figma'],
          title: 'Design',
        },
        {
          body: ['git + GitHub, Agile, Jira, Jest, Cypress'],
          title: 'Workflow + Testing',
        },
        {
          body: ['AG Grid, d3, OpenLayers, Leaflet, Google Maps, Mapbox'],
          title: 'Data Visualization + Maps',
        },
        {
          body: ['Node, Postgres', 'Express'],
          title: 'Backend',
        },
      ],
      title: 'Skills',
    },
    {
      children: [
        {
          body: [`February 2024 - Present, ${geospanLength}`],
          subtitles: ['Senior Software Engineer'],
          title: 'GeoSpan',
        },
        {
          body: [
            'January 2021 - July 2023, 2.5 years',
            'Worked on Ridgeline’s UI team and Tables team. I specialized in building our data table components and related functionality. One of my main projects was being a primary engineer of our new table component, which was used heavily by customers to manage investment data.',
          ],
          subtitles: ['Senior Product Engineer'],
          title: 'Ridgeline',
        },
        {
          body: [
            'January 2019 - February 2021, 2 years',
            'Worked on a React-based data-visualization application marketed toward corporations with big data requirements.',
          ],
          subtitles: ['Frontend Engineer, Frontend Team Lead'],
          title: 'Heavy.AI',
        },
        {
          body: [
            'January 2018 - January 2019, 1 year',
            'Built user interface for scientists to upload and create geospatial data related to plant and animal biodiversity.',
          ],
          subtitles: ['Front End Web Developer, Web Applications Developer'],
          title: 'Yale',
        },
        {
          body: [
            `November 2014 - present, ${contractingLength}`,
            'I occasionally take contract and freelance roles doing web development. I work primarily with nonprofit organizations to develop frontend applications, specializing in web mapping and data visualization tools.',
          ],
          title: 'Contracting',
        },
        {
          body: [
            'September 2013 - December 2014, 1 year 3 months',
            "Built web applications for the Wisconsin State Cartographer's office to manage statewide datasets. Worked on both building tools to ingest data as well as display it. ",
          ],
          subtitles: ['GIS / Web Development Assistant'],
          title: `Wisconsin State Cartographer's Office`,
        },
      ],
      title: 'Work Experience',
    },
    {
      children: [
        {
          body: [
            '2010 - 2014, 4 years',
            'I focused on interactive cartography and web-development related classes. I worked as an intern during the last year and a half doing GIS-related web development. I took two directed study courses that involved developing web applications that focused on geospatial data.',
          ],
          subtitles: ['BS - Cartography and Geographic Information Sciences'],
          title: 'University of Wisconsin-Madison',
        },
      ],
      title: 'Education',
    },
    {
      children: [
        {
          body: ['Built a custom camper van from scratch'],
          subtitles: ['2020 - 2023, 3 years'],
          title: 'Van Build',
        },
        {
          body: [
            'High-altitude mountaineering leadership course in the Indian Himalaya',
          ],
          subtitles: ['Himalaya Mountaineering, 2011'],
          title: 'National Outdoor Leadership School',
        },
        {
          subtitles: ['2009 - 2010'],
          title: 'Private Pilot License',
        },
        {
          body: ['7th place female finisher'],
          title: '50k Ultramarathon',
        },
      ],
      title: 'Extracurriculars',
    },
  ],
  subtitle: 'Senior Frontend Software Engineer',
  tagline:
    'I specialize in building complex React-based web applications, with a background in data visualization and GIS.',
  title: 'Caitlin Wolters',
}
