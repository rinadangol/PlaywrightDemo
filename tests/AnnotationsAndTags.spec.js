import {test, expect} from '@playwright/test'

test.skip('test one', async({page})=>{

})

test('not ready yet', async({page})=>{
//await page.goto('https://www.google.com')
test.fail()
})

test.fixme('test to be fixed', async({page})=>{

})

test('slow test',async({page})=>{
    test.slow()
})

test('focus this test',async({page})=>{

})

test('test login page @smoke', async({page})=>{

})