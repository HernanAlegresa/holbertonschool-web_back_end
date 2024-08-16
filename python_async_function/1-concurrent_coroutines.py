#!/usr/bin/env python3
"""
Async function that executes multiple coroutines.
"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Executes wait_random n times in pararell using asyncio.gather

    Args:
        n (int): Number of times to execute wait_random.
        max_delay (int): Maximum delay time for wait_random.

    Returns:
        List[float]: List of all delays in ascending order.
    """
    # Lista para almacenar las tareas
    task_list = []
    # Crear las tareas usando un bucle for
    for _ in range(n):
        task = asyncio.create_task(wait_random(max_delay))
        task_list.append(task)
    # Ejeutar todas las tareas en paralelo y esperar a que terminen
    delays = await asyncio.gather(*task_list)
    # Ordena la lista de delays de menor a mayor
    return sorted(delays)
