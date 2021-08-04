#!/usr/bin/env node

import game from '../src/index.js';
import { gameDescription, question, correct } from '../src/brain-calc/gameLogic.js';

game(gameDescription, question, correct);