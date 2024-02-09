function App() {
    const [options, setOptions] = useState([]);
  
    useEffect(() => {
      // Faça uma solicitação à API
      fetch("https://api.example.com/options")
        .then((response) => response.json())
        .then((data) => {
          // Atualize a lista de opções
          setOptions(data.options);
        });
    }, []);
  
    return (
      <div>
        <select onChange={(e) => {
          console.log(e.target.value);
        }}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>
      </div>
    );
  }