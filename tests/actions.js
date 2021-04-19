import { short } from '../lib/timeouts'

describe('Browser Actions', function() {
    it('Inputs', function()  {
        browser.url('https://devexpress.github.io/testcafe/example/');
        const input = $('#developer-name');
        input.waitForExist();
        input.setValue('Mike');
        browser.pause(short);
        input.clearValue();
        browser.pause(short);
        input.addValue('Mike');
        browser.pause(short);
    });

    it('Click', function()  {
        const buttonPupulate = $('#populate')
        buttonPupulate.waitForExist();
        buttonPupulate.click();
    });

    it('Checkbox & Radio Button', function() {
        browser.url('https://devexpress.github.io/testcafe/example/');
        const radio = $('#linux');
        radio.waitForExist();
        radio.click();
        browser.pause(short);

        const checkbox = $('#remote-testing');
        checkbox.waitForExist();
        checkbox.click();
        browser.pause(short);
    });

    it('Select Box', function() {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const select = $('#preferred-interface');
        select.waitForExist();
        select.selectByVisibleText('JavaScript API');
        browser.pause(short);
    });
});