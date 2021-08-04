#!/usr/bin/env node

import game from '../src/interfaceLogic.js';
import { gameDescription, question, correct } from '../src/brain-even/gameLogic.js';

game(gameDescription, question, correct);
