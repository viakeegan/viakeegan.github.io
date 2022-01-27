import React, {useState, useEffect} from "react";
import Header from './components/Header';
import About from "./components/About";
import Portfolio from './components/Portfolio';
import ContactForm from "./components/Contact";
import Resume from './components/Resume';
import Footer from "./components/Footer";
import { capitalizeFirstLetter } from "./utils/helpers";

function App() {
  const [categories] = useState(['about', 'portfolio', 'contact', 'resume']);
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
        {currentCategory === 'contact' && 
          <ContactForm></ContactForm>
        }
        {currentCategory === 'resume' && 
          <Resume></Resume>
        }
      </main>
      <Footer></Footer>
    </body>
  )
}

export default App;
