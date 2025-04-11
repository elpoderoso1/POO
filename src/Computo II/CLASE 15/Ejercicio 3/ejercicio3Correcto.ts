interface WorkableInterface {
    working(): void;
    takeBreak(): void;
}

interface CodeableInterface {
    coding(): void;
}

class Developer001 implements WorkableInterface, CodeableInterface {
    public working(): void { }
    public takeBreak(): void { }
    public coding(): void { }
}

class Manager001 implements WorkableInterface {
    public working(): void { }
    public takeBreak(): void { }
}
