#!/usr/bin/env python3
"""
function that wraps wait_random in a task.
"""

import asyncio
from typing import Any
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> Any:
    """
    Creates an asyncio Task for the wait_random function.

    Args:
        max_delay (int): Maximum delay time for wait_random.

    Returns:
        asyncio.Task: A task that wraps wait_random.
    """
    return asyncio.create_task(wait_random(max_delay))
