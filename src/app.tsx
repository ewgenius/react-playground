/// <reference path="../typings/modules/reflexbox/index.d.ts" />

import * as React from 'react'
import { render } from 'react-dom'
import { Flex } from 'reflexbox'

const container = document.querySelector('#root')

render(<Flex>
test
</Flex>, container)
