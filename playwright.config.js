module.exports = {
    testDir: './', // Specify the directory containing your test files
    // Other configuration options
    use: {
        slowMo: 1000, // Slows down each operation by 1000ms (1 second)
      },
    timeout : 3*60*1000,

    reporter: [['html'], ['line'],],

  };
