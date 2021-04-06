const getSets = async () => {
    fetch("http://localhost:5000/sets")
        .then((res) => {
            if(!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then((data) => {
            console.log(data)
            return data
        })
}
export default getSets;