#!/usr/bin/env python3
"""
Defines a coroutine that measures runtime.
"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel
    and measures the total runtime.

    Returns:
        float: The total runtime in seconds.
    """
    start_time = time.perf_counter()  # Medir el tiempo de inicio

    # Ejecutar async_comprehension cuatro veces en paralelo
    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    end_time = time.perf_counter()  # Medir el tiempo de finalización

    return end_time - start_time  # Devolver el tiempo total de ejecución
