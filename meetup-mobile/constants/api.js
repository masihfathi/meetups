// fetch method
/*export const fetchMeetups = () => 
 fetch('https://abifiltration.ir/api/meetups')
 .then(res => res.json()).catch(e =>console.error('error fetching request'+e));*/
// axios method
import axios from 'axios';
axios.defaults.baseURL = 'https://abifiltration.ir/api';
const FAKEGROUPID = '5997fdd40a6f83293c1d0921';
class MeetApi {
    constructor() {
        this.groupId = FAKEGROUPID;
        this.path = `/groups/${this.groupId}/meetups`;
    }
    async fetchGroupMeetups() {
        const {data} = await axios.get(this.path)
        return data.meetups;
    }
}
export {
    MeetApi
};

