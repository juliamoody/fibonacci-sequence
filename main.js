
function fibonacci() {
    var sequence = new Array(10);
    sequence[0] = 0;
    sequence[1] = 1;
    for (let i = 2; i < sequence.length; i++) {
        sequence[i] = ((sequence[i-1]) + (sequence[i-2]));
    }
    return sequence;
}
