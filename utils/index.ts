export async function fetchSports() {
    const headers ={
        'X-RapidAPI-Key': '63c7ec57a7mshb50233f014bc936p16a0bejsn825114160d76',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }

    try {
        const response = await fetch('https://free-nba.p.rapidapi.com/players', {
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const result = await response.json();
        return result; // Return the parsed JSON object
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
