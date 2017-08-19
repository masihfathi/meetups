export const fetchMeetups = () => 
    fetch('https://abifiltration.ir/api/meetups')
            .then(res => res.json()).catch(e =>console.error('error fetching request'+e));


