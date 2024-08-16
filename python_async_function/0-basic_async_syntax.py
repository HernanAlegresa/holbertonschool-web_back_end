#!/usr/bin/env python3
"""
Async function that waits for a random delay.
"""

import asyncio
import random


async def wait_random(max_delay: int) -> float:
    """
    Waits for a random delay between 0 and max_delay seconds.

    Args:
        max_delay (int): Maximum delay time in seconds.

    Returns:
        float: The actual delay time.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
