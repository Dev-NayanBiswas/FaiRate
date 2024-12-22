const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT (
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'defaultColor':'#00897b'
        },
        fontFamily:{
          'heading':["Grandstander", 'serif'],
          'default':["Roboto Flex",'serif'],
          'ubuntu':["Ubuntu", 'serif'],
          'para':['Fraunces', 'serif'],
        }
        
      },
    },
    daisyui: {
      themes: ["coffee", "fantasy"],
    },
    plugins: [
      require('daisyui'),
    ],
  }
)
