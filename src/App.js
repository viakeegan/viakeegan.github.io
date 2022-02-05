import React, {useState, useEffect} from "react";
import Header from './components/Header';
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import { capitalizeFirstLetter } from "./utils/helpers";

function App() {
  const [categories] = useState(['about', 'portfolio', 'resume', 'contact']);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory);
  }, [currentCategory]);

  return (
    <body>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        {currentCategory === 'about' && 
          <About></About>
        }
        {currentCategory === 'portfolio' && 
          <Portfolio></Portfolio>
        }
        {currentCategory === 'resume' && 
          <Resume></Resume>
        }
        {currentCategory === 'contact' && 
          <ContactForm></ContactForm>
        }
      </main>
      <Footer></Footer>
    </body>
  )
}

export default App;
