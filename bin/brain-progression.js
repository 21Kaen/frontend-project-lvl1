#!/usr/bin/env node

import game from '../src/index.js';
import { gameDescription, question, correct } from '../src/brain-progression/gameLogic.js';

game(gameDescription, question, correct);
