int main() {
    int a = 5;
    int b = 3;
    int c;

    c = a + b - 2;

    while (c >= 0) {
        c = c - 1;

        if (c == 2) {
            b = a + 3;
        } else {
            b = b + 5;
        }
    }

    return 1;
}