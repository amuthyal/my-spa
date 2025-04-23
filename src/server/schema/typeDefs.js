// server/schema/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Home {
  name: String
  title: String
  organization: String
  affiliation: String
  backgroundImage: String
}
  type About {
    title: String
    paragraphs: [String]
  }

  type Experience {
    org: String
    role: String
  }

  type Fieldwork {
    title: String
    description: String
    images: [String]
  }
    type TravelImage {
    url: String
  }
    type ContactLink {
  label: String
  icon: String
  url: String
}

type Contact {
  title: String
  subtitle: String
  links: [ContactLink]
}
type HeaderConfig {
  siteTitle: String
  sections: [String]
  resumeUrl: String
}

  type Query {
   getHome: Home
    getAbout: About
    getExperiences: [Experience]
    getFieldwork: [Fieldwork]
    getTravelImages: [TravelImage]
    getContact: Contact
    getHeaderConfig: HeaderConfig
  }
`;

module.exports = typeDefs;
