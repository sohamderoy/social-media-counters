const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach(counter => {          // loop through all the 4 counters. Needed for more than one counter
    const updateCount = () => {
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerText);

        const inc = target / speed;
        console.log(count);
        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        }
        else {
            count.innerText = target;
        }
    }
    updateCount();
});