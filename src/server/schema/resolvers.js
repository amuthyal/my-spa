// server/schema/resolvers.js

const resolvers = {
    Query: {
        getHome: () => ({
            name: "Rohi Muthyala, Ph.D",
            title: "Glacial Hydrologist",
            organization: "Lamont-Doherty Earth Observatory",
            affiliation: "Columbia University",
            backgroundImage: "/assets/IMG_E2226.jpeg"
          }),
      getAbout: () => ({
        title: "A Little Bit About Me",
        paragraphs: [
          `I’m a glacial hydrologist and Post-doctoral Research Scientist at Columbia University's Lamont Doherty Earth Observatory, where my work centers on understanding the complex dynamics of glacial hydrology across the Greenland and Antarctic ice sheets. 
          My research integrates field-based hydrometeorological observations, remote sensing, and regional climate modeling to uncover the drivers of streamflow, energy balance, and seasonal change on the ice.`,
          `From exploring how microbial communities influence sediment transport and surface albedo on supraglacial streams, to using self-organizing maps to track atmospheric river moisture transport, I’m passionate about using data-driven approaches to study cryospheric systems. 
          I've also led remote sensing campaigns—leveraging UAV and satellite imagery—to investigate the seasonal evolution of weathering crust in southwest Greenland.`,
          `Before academia, I worked as an Environmental/Atmospheric Scientist at Kepler51 Analytics, where I focused on high-resolution hydrometeorological forecasting. There, I combined large-scale climate datasets with modeling tools to deliver actionable insights to clients, bridging the gap between scientific analysis and real-world impact.`,
          `At the core of my work is a commitment to advancing our understanding of climate change and its cascading effects on Earth's polar systems and society at large.`,
        ],
      }),
      getExperiences: () => [
        { org: "Lamont Doherty Earth Observatory, Columbia University", role: "Post-doctoral Research Scientist" },
        { org: "Kepler51 Analytics", role: "Environmental/Atmospheric Scientist" },
        { org: "Rutgers University", role: "PhD" },
        { org: "Divecha Center for Climate Change (IISc)", role: "Senior Research Fellow" },
        { org: "Indian Institute of Science (IISc)", role: "Masters in Climate Science" },
        { org: "National Institute of Technology (NITH)", role: "Bachelors in Civil Engineering" },
      ],
      getContact: () => ({
        title: "Let's Connect",
        subtitle: "Feel free to reach out through any of the platforms below.",
        links: [
          { label: "GitHub", icon: "FaGithub", url: "https://github.com/your-profile" },
          { label: "Instagram", icon: "FaInstagram", url: "https://www.instagram.com/rohi_muthyala/" },
          { label: "LinkedIn", icon: "FaLinkedin", url: "https://www.linkedin.com/in/rohi-muthyala/" },
          { label: "Email", icon: "FaEnvelope", url: "mailto:rohi.muthyala.91@gmail.com" },
        ],
      }),
      getHeaderConfig: () => ({
        siteTitle: "ROHI MUTHYALA",
        sections: ["about", "experience", "fieldwork", "research", "travel", "contact"],
        resumeUrl: "/resume.pdf"
      }),
      getFieldwork: () => [
        {
          title: "Nov 2024 – Flask Glacier, Antarctica",
          description: "8 weeks of fieldwork studying ice flow and the impact of surface melt at high spatiotemporal resolutions. Tasks: GNSS systems for ice velocity, mass balance using AWS, seismometers for lake drainage, ApRES radar deployment, UAV imagery for DEM generation, density measurements, and snow samples for microplastics.",
          images: ["/assets/antarctica1.jpg", "/assets/antarctica5.jpg", "/assets/antarctica3.jpg"],
        },
        {
          title: "June 2024 – Juneau, Alaska",
          description: "3 weeks with JIRP testing a fixed wing drone (Wingtra) in extreme conditions to prep for Antarctic Peninsula. Also trained in field safety, crevasse rescue, rope/harness management, snow machine use, and first aid.",
          images: ["/assets/alaska1.jpg"],
        },
        {
          title: "June 2019 – Kangerlussuaq, Greenland",
          description: "10 weeks studying supraglacial/proglacial streamflow, weathering crust hydrology, sediment transport, and meteorology. Led aerial imagery collection and conducted hydraulic conductivity tests, cryoconite hole surveys.",
          images: ["/assets/greenland10.jpg", "/assets/greenland13.jpg"],
        },
        {
            title: 'July 2018 – Kangerlussuaq, Greenland',
            description: `3 weeks studying supraglacial/proglacial streamflow, hydraulic conductivity, albedo, and UAV imagery of catchment.`,
            images: ["/assets/greenland6.jpg", "/assets/greenland8.jpg","/assets/greenland7.jpg","/assets/greenland9.jpg","/assets/greenland5.jpg"],
          },
          {
            title: 'July 2017 – Kangerlussuaq, Greenland',
            description: `2 weeks focused on supraglacial/proglacial streamflow and weather station meteorology.`,
            images: ["/assets/greenland3.jpg","/assets/greenland15.jpg","/assets/greenland4.jpg","/assets/greenland16.jpg"],
          },
          {
            title: 'Feb 2017 – Adirondacks, New York',
            description: `3 days with Rutgers Hydroclimatology group collecting snow hydrology data: snow pits, density, conductivity, depth, and metamorphosis.`,
            images: ["/assets/adirondacks1.jpg","/assets/adirondacks2.jpg"],
          },
          {
            title: 'June 2016 – Kangerlussuaq, Greenland',
            description: `4 weeks studying supraglacial/proglacial streamflow, discharge, ablation, stream incision, temperature, and weather station readings.`,
            images: ["/assets/greenland1.jpg", "/assets/greenland2.jpg"],
          },
          {
            title: 'Oct 2015 – Montclair University, New Jersey',
            description: `4 days of hydrometeorological observations and albedo measurements.`,
            images: ["/assets/montclair1.jpg"],
          }
      ],
      getTravelImages: () => {
        const travelImages = [
          "travel1.jpg",
          "travel2.jpg",
          "travel3.jpg",
          "travel4.jpg",
          "travel5.jpg",
          "travel6.jpg",
          "travel7.jpg",
          "travel8.jpg",
          "travel9.jpg",
          "travel10.jpg",
          "travel11.jpg",
          "travel12.jpg",
        ];
        return travelImages.map((img) => ({ url: `/assets/travel/${img}` }));
      }  
    },
  };
  
  module.exports = resolvers;
  