export const fetchMeetups = () => 
    fetch('http://188.226.146.190:3000/api/meetups')
            .then(res => res.json);


