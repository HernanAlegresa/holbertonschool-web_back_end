#!/usr/bin/env python3
"""
Async function that executes multiple tasks.
"""

from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def wait_n_tasks(n: int, max_delay: int) -> List[float]:
    """
    Args:
        n (int): Number of times to execute task_wait_random.
        max_delay (int): Maximum delay time for task_wait_random.

    Returns:
        List[float]: List of all delays in ascending order.
    """
    tasks_list = []
    delay_list = []
    # Variable para las tasks y las agrega a la lista de tasks con append
    for _ in range(n):
        task = task_wait_random(max_delay)
        tasks_list.append(task)
    # Ejecuta las tasks y guarda los resultados en la lista delays
    for task in tasks_list:
        delay = await task
        delay_list.append(delay)

    return sorted(delay_list)
