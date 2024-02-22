/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  exportToC,
  loadUGESong,
  saveUGESong,
} from "../../../../src/shared/lib/uge/ugeHelper";
import { readFile } from "fs-extra";

test("should convert noise macro from uge 5 files into uge 6 subpattern", async () => {
  const data = await readFile(`${__dirname}/song_template_v5.uge`);
  const dataArray = new Uint8Array(data).buffer;
  const song = loadUGESong(dataArray);

  expect(song.version).toBe(6);
  expect(song.noise_instruments[11].subpattern_enabled).toBe(true);
  expect(song.noise_instruments[11].subpattern).toEqual(
    SUBPATTERN_FROM_NOISE_MACRO_EXAMPLE
  );
});

test("should load uge 6 files and return a Song object", async () => {
  const data = await readFile(`${__dirname}/song_template_v6.uge`);
  const dataArray = new Uint8Array(data).buffer;
  const song = loadUGESong(dataArray);

  expect(song.version).toBe(6);
  expect(song.duty_instruments[0].name).toBe("Fade Out 25% Pulse");
});

test("should save a file correctly", async () => {
  const data = await readFile(`${__dirname}/song_template_v6.uge`);
  const dataArray = new Uint8Array(data).buffer;
  const song = loadUGESong(dataArray);

  expect(song.version).toBe(6);

  const savedData = saveUGESong(song);

  expect(savedData).toStrictEqual(dataArray);
});

test("should export the song to C", async () => {
  const data = await readFile(`${__dirname}/song_template_v6.uge`);
  const dataArray = new Uint8Array(data).buffer;
  const song = loadUGESong(dataArray);

  expect(song.version).toBe(6);

  const savedData = exportToC(song, "song_template");

  expect(savedData).toBe(SONG_V6_TO_C);
});

const SUBPATTERN_FROM_NOISE_MACRO_EXAMPLE = [
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: 63,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: 50,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: 53,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: 34,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: 6,
    note: 36,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: 36,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
  {
    effectcode: null,
    effectparam: null,
    jump: null,
    note: null,
  },
];

const SONG_V6_TO_C = `#pragma bank 255

#include "hUGEDriver.h"
#include <stddef.h>
#include "hUGEDriverRoutines.h"

static const unsigned char order_cnt = 2;
static const unsigned char song_pattern_0[] = {
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
};
static const unsigned char noise_0_subpattern[] = {
    DN(___, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 6, 0x000),
    DN(68, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_1_subpattern[] = {
    DN(___, 0, 0x000),
    DN(67, 0, 0x000),
    DN(67, 0, 0x000),
    DN(67, 0, 0x000),
    DN(67, 0, 0x000),
    DN(67, 6, 0x000),
    DN(67, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_2_subpattern[] = {
    DN(___, 0, 0x000),
    DN(64, 0, 0x000),
    DN(64, 0, 0x000),
    DN(64, 0, 0x000),
    DN(64, 0, 0x000),
    DN(64, 6, 0x000),
    DN(64, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_3_subpattern[] = {
    DN(___, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 6, 0x000),
    DN(68, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_4_subpattern[] = {
    DN(___, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 6, 0x000),
    DN(60, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_5_subpattern[] = {
    DN(___, 0, 0x000),
    DN(52, 0, 0x000),
    DN(52, 0, 0x000),
    DN(52, 0, 0x000),
    DN(52, 0, 0x000),
    DN(52, 6, 0x000),
    DN(52, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_6_subpattern[] = {
    DN(___, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 6, 0x000),
    DN(60, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_7_subpattern[] = {
    DN(___, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 0, 0x000),
    DN(60, 6, 0x000),
    DN(60, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_8_subpattern[] = {
    DN(___, 0, 0x000),
    DN(52, 0, 0x000),
    DN(51, 0, 0x000),
    DN(51, 0, 0x000),
    DN(51, 0, 0x000),
    DN(51, 6, 0x000),
    DN(51, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_9_subpattern[] = {
    DN(___, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 0, 0x000),
    DN(68, 6, 0x000),
    DN(68, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_10_subpattern[] = {
    DN(___, 0, 0x000),
    DN(52, 0, 0x000),
    DN(51, 0, 0x000),
    DN(51, 0, 0x000),
    DN(51, 0, 0x000),
    DN(51, 6, 0x000),
    DN(51, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_11_subpattern[] = {
    DN(___, 0, 0x000),
    DN(63, 0, 0x000),
    DN(50, 0, 0x000),
    DN(53, 0, 0x000),
    DN(34, 0, 0x000),
    DN(36, 6, 0x000),
    DN(36, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_12_subpattern[] = {
    DN(___, 0, 0x000),
    DN(49, 0, 0x000),
    DN(47, 0, 0x000),
    DN(45, 0, 0x000),
    DN(43, 0, 0x000),
    DN(43, 6, 0x000),
    DN(43, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_13_subpattern[] = {
    DN(___, 0, 0x000),
    DN(44, 0, 0x000),
    DN(43, 0, 0x000),
    DN(42, 0, 0x000),
    DN(41, 0, 0x000),
    DN(40, 6, 0x000),
    DN(40, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char noise_14_subpattern[] = {
    DN(___, 0, 0x000),
    DN(36, 0, 0x000),
    DN(36, 0, 0x000),
    DN(36, 0, 0x000),
    DN(36, 0, 0x000),
    DN(36, 6, 0x000),
    DN(36, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 0, 0x000),
    DN(___, 1, 0x000),
};
static const unsigned char* const order1[] = {song_pattern_0};
static const unsigned char* const order2[] = {song_pattern_0};
static const unsigned char* const order3[] = {song_pattern_0};
static const unsigned char* const order4[] = {song_pattern_0};
static const hUGEDutyInstr_t duty_instruments[] = {
    { 0x00, 0x40, 0xB5, 0, 0x80 },
    { 0x00, 0x80, 0xB5, 0, 0x80 },
    { 0x00, 0x00, 0x09, 0, 0xC0 },
    { 0x00, 0x30, 0xB0, 0, 0xC0 },
    { 0x00, 0x70, 0xB0, 0, 0xC0 },
    { 0x00, 0xB0, 0xB0, 0, 0xC0 },
    { 0x00, 0x00, 0xB0, 0, 0x80 },
    { 0x00, 0x40, 0xB0, 0, 0x80 },
    { 0x00, 0x80, 0xB0, 0, 0x80 },
    { 0x00, 0xC0, 0xB0, 0, 0x80 },
    { 0x1C, 0x80, 0xB2, 0, 0xC0 },
    { 0x19, 0x80, 0xB5, 0, 0x80 },
    { 0x47, 0x00, 0xB7, 0, 0x80 },
    { 0x15, 0x60, 0xB7, 0, 0xC0 },
    { 0x00, 0x80, 0x00, 0, 0x80 },
};
static const hUGEWaveInstr_t wave_instruments[] = {
    { 0x80, 0x20, 0x01, 0, 0xC0 },
    { 0x80, 0x20, 0x02, 0, 0xC0 },
    { 0x80, 0x20, 0x03, 0, 0xC0 },
    { 0x80, 0x20, 0x04, 0, 0xC0 },
    { 0x80, 0x20, 0x05, 0, 0xC0 },
    { 0x80, 0x20, 0x06, 0, 0xC0 },
    { 0x00, 0x20, 0x07, 0, 0x80 },
    { 0x00, 0x20, 0x08, 0, 0x80 },
    { 0x00, 0x20, 0x09, 0, 0x80 },
    { 0x00, 0x20, 0x0A, 0, 0x80 },
    { 0x00, 0x20, 0x0B, 0, 0x80 },
    { 0x00, 0x20, 0x0C, 0, 0x80 },
    { 0x00, 0x20, 0x0D, 0, 0x80 },
    { 0x00, 0x20, 0x0E, 0, 0x80 },
    { 0x00, 0x20, 0x0F, 0, 0x80 },
};
static const hUGENoiseInstr_t noise_instruments[] = {
    { 0x91, noise_0_subpattern, 0x70, 0, 0 },
    { 0x91, noise_1_subpattern, 0x60, 0, 0 },
    { 0x91, noise_2_subpattern, 0x00, 0, 0 },
    { 0x92, noise_3_subpattern, 0x00, 0, 0 },
    { 0x94, noise_4_subpattern, 0x00, 0, 0 },
    { 0x94, noise_5_subpattern, 0x00, 0, 0 },
    { 0xB1, noise_6_subpattern, 0x00, 0, 0 },
    { 0xB1, noise_7_subpattern, 0x80, 0, 0 },
    { 0xB1, noise_8_subpattern, 0x80, 0, 0 },
    { 0x91, noise_9_subpattern, 0x80, 0, 0 },
    { 0xB2, noise_10_subpattern, 0x40, 0, 0 },
    { 0xB1, noise_11_subpattern, 0x56, 0, 0 },
    { 0xB7, noise_12_subpattern, 0x00, 0, 0 },
    { 0xB7, noise_13_subpattern, 0x80, 0, 0 },
    { 0x00, noise_14_subpattern, 0x00, 0, 0 },
};
static const unsigned char waves[] = {
    0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88,
    0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0x33, 0x33, 0x33, 0x33, 0x33, 0x33, 0x33, 0x33,
    0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 0x55, 0x55, 0x55, 0x55,
    0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x77, 0x77, 0x77, 0x77, 0x77, 0x77, 0x77, 0x77,
    0xFF, 0xFF, 0xCC, 0xCC, 0xFF, 0xFF, 0xCC, 0xCC, 0x00, 0x00, 0x33, 0x33, 0x00, 0x00, 0x33, 0x33,
    0xFE, 0xDC, 0xBA, 0x98, 0x76, 0x54, 0x32, 0x10, 0x01, 0x23, 0x45, 0x67, 0x89, 0xAB, 0xCD, 0xEF,
    0xFF, 0xFF, 0xBA, 0x98, 0xA9, 0x87, 0x32, 0x10, 0x34, 0x56, 0x45, 0x67, 0xBC, 0xDE, 0xCD, 0xEF,
    0xFF, 0xEE, 0xDD, 0xCC, 0xBB, 0xAA, 0x99, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11, 0x00,
    0xFF, 0xFE, 0xFD, 0xFC, 0xFB, 0xFA, 0xF9, 0xF8, 0xE7, 0xD6, 0xC5, 0xB4, 0xA3, 0x92, 0x81, 0x70,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
};

const void __at(255) __bank_song_template_Data;
const hUGESong_t song_template_Data = {
    6,
    &order_cnt,
    order1, order2, order3, order4,
    duty_instruments, wave_instruments, noise_instruments,
    routines,
    waves
};
`;
