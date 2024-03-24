function determineDemeritPoints(speed) {
const limit = 70;
const distancePerPoint = 5;
const maxPoints = 12;

if (speed <= limit) {
    console.log(`Ok`);
}

const demeritPoints = Math.floor((speed - limit) / distancePerPoint);

if (demeritPoints > maxPoints) {
    console.log(`License suspended`);
}
else {
    console.log(`Points:`, demeritPoints);
}
}