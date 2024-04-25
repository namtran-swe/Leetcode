/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    let roomsCounter = new Array(n).fill(0);
    let availableRooms = new Array(n).fill(-1);

    meetings.sort((a, b) => a[0] - b[0]);

    meetings.map((meeting) => {
        let [start, end] = meeting;
        let earliestRoom = 0;
        let earliestEndTime = Number.MAX_SAFE_INTEGER;
        let isRoomAvailable = false;

        for (let i = 0; i < n; i++) {
            if (availableRooms[i] <= start) {
                roomsCounter[i]++;
                availableRooms[i] = end;
                isRoomAvailable = true;
                break;
            }
            if (availableRooms[i] < earliestEndTime) {
                earliestEndTime = availableRooms[i];
                earliestRoom = i; 
            }
        }

        if (!isRoomAvailable) {
            roomsCounter[earliestRoom]++;
            availableRooms[earliestRoom] += end - start;
        }
    });
    return roomsCounter.indexOf(Math.max(...roomsCounter));
};

//Runtime: 231ms
//Memory: 83.4 MB