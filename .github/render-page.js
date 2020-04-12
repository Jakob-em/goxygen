const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({executablePath: 'google-chrome'});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080')
    const body = await page.$("body");
    const text = await page.evaluate(e => e.textContent, body);
    console.log(text);
    await browser.close();
})()
