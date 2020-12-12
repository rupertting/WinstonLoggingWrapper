const moduleSPWLogger = require('../src/index');

describe('Initialize a logger', function () {
    
    let testLogger = null;
    let spy = null;

    beforeEach(() => {
        spy = jest.spyOn(moduleSPWLogger, 'init');
        testLogger = moduleSPWLogger.init();
    })
   
    it("Should verify a Winston logger was created", () => {
        expect(spy).toHaveBeenCalled();
        expect(testLogger).toMatchObject(expect.any(Object));
        
        expect(testLogger.level).toBe('info');
        spy.mockRestore();
    });
});