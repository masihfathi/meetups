// fetch method
/*export const fetchMeetups = () => 
 fetch('https://abifiltration.ir/api/meetups')
 .then(res => res.json()).catch(e =>console.error('error fetching request'+e));*/
// axios method
import axios from 'axios';
axios.defaults.baseURL = 'https://abifiltration.ir/api';
const FAKEGROUPID = '5998221e0a6f83293c1d0922';
class MeetApi {
    constructor() {
        this.groupId = FAKEGROUPID;
        this.path = `/groups/${this.groupId}/meetups`;
    }
    async fetchGroupMeetups() {    
        console.log('masih');
        console.log('path', this.path);
        const {data} = await axios.get(this.path);
        console.log('date', data);
        return data.meetups;
    }
}
export default MeetApi;


