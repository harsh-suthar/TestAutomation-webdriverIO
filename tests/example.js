import { short, medium, long } from '../lib/timeouts'
import { mobile, tablet, desktop } from '../lib/devices'

describe('First Steps with WebdrverIO', function() {
    it('Load Example Website', function() {
        browser.url('http://www.example.com')
        browser.pause(short);
        expect(browser).toHaveUrl('http://www.example.com/');
        expect(browser).toHaveTitle('Example Domain');
    });

    it('H1 should be visible', function() {
        const h1 = $('h1');
        h1.waitForExist();
        expect(h1).toBeVisible();
    });

    it('P should be visible', function() {
        const p = $('p');
        p.waitForExist();
        expect(p).toBeVisible();
    });

    it('Check Link Value', function() {
        const link = $('a');
        expect(link).toHaveLink('https://www.iana.org/domains/example');
    });

    it('Get Element Text', function() {
        const text = $('h1').getText();
        const element = $('h1');
        element.waitForExist();
        expect(element).toHaveText('Example Domain');
    });

    it('Assert Attribute', function() {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button');
        button.waitForExist();
        expect(button).toHaveAttrContaining('type', 'submit');
    });

    it('Assert Value', function() {
        const button = $('#populate');
        button.waitForExist();
        expect(button).toHaveValue('Populate');
    });

    it('Save Screenshot', function() {
        browser.saveScreenshot('your-name.png');
    });

    it('Change Browser Viewport', function() {
        browser.setWindowSize(800, 600);
        browser.pause(long);
    });

    it('Set Mobile View', function() {
        browser.setWindowSize(mobile[0], mobile[1]);
        browser.pause(short);
    })

    it('Set Tablet View', function() {
        browser.setWindowSize(tablet[0], tablet[1]);
        browser.pause(short);
    });

    it('Set Desktop View', function() {
        browser.setWindowSize(desktop[0], desktop[1]);
        browser.pause(short);
    });
});

