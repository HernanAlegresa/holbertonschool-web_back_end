#!/usr/bin/env python3
"""
Async function that executes multiple tasks.
"""
import asyncio
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
    task_list = []
    for _ in range(n):
        # Tarea creada task para task_wait_random y la agregamos a la lista
        task = task_wait_random(max_delay)
        task_list.append(task)

    # Ejecuta todas las tareas en paralelo y esperamos los resultados
    delays = await asyncio.gather(*task_list)

    # Lista de delays en orden de menor a mayor.
    return sorted(delays)
