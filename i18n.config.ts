export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        navbar:{
            cat1: "About",
            cat2: "Projects",
            cat3: "Contact"
        },
        landing:{
            title1: "Freelance",
            title2: "Frontend",
            title3: "Developer",
        },
        about:{
            title: "About me",
            p0: "I'm a freelance front-end developper from Nantes,  France.",
            p1: "In 2016 I graduated from the National Institue of Applied Sciences (INSA) in Lyon and got my Engineering Degree in Mechanics.",
            p2: "After 6 years working in the fields of luxury goods and automobiles, I decided to follow my passion and become a web developer.",
            p3: "After finishing Codecademy's Front-End development course and several months of practicing what I had learned, I started freelancing  in December 2023."
        },
        projects:{
            title: "Projects"
        },
        contact:{
            title: "Let's work",
            highlight: "together",
            mail: "Want to work together on a project?"
        }
      },
      fr: {
        navbar:{
            cat1: "À  propos",
            cat2: "Projets",
            cat3: "Contacter"
        },
        landing:{
            title1: "Développeuse",
            title2: "Front-End",
            title3: "Freelance",
        },
        about:{
            title: "A propos",
            p0: "Je suis une développeuse web Front-End de Nantes, France.",
            p1: "En 2016 j'ai obtenu mon diplôme d'ingénieure en Mécanique et Conception de l'Institut National de Sciences Appliquées (INSA) de Lyon.",
            p2: "Après 6 ans de travail dans l'industrie dans les secteurs du luxe et de l'automobile, j'ai decidé de suivre ma passion et de devenir devéloppeuse web", 
            p3: "Ainsi, après avoir fini le cours \"Front-End Development\" de Codecademy et plusieurs mois de pratique sur de divers projets, j'ai commencé ma carrière en Freelance en Decembre 2023."
        },
        projects:{
            title: "Projets"
        },
        contact:{
            title: "Travaillons",
            highlight: "ensemble",
            p: "On travaille ensemble sur un projet?"
        }
      }
    }
  }))