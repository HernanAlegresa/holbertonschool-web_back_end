#!/usr/bin/env python3
"""
This module defines a function that executes multiple coroutines as tasks.
"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Args:
        n (int): Number of times to execute wait_random.
        max_delay (int): Maximum delay time for wait_random.

    Returns:
        List[float]: List of all delays in ascending order.
    """
    tasks = []
    for _ in range(n):
        task = asyncio.create_task(wait_random(max_delay))
        tasks.append(task)
    delays = await asyncio.gather(*tasks)

    return sorted(delays)
