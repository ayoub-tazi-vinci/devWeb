import { useEffect, useState } from "react";

interface Dog {
    message: string;
    status: string;
}

const Dog = () => {
    const [dog, setDog] = useState<Dog>({ message: '', status: '' });

    const fetchDog = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((dog) => setDog(dog))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchDog();
    }, []);

    return (
        <div>
            {dog.message ? <img src={dog.message} alt="dog" /> : <p>Loading...</p>}
            <p>{dog.status}</p>
        </div>
    );
};

export default Dog;