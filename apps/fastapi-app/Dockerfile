# Build stage
FROM python:3.9-slim as builder

WORKDIR /app

# Install build dependencies and uv
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && curl -LsSf https://astral.sh/uv/install.sh | sh

# Copy project files
COPY pyproject.toml ./

# Create virtual environment and install dependencies
RUN uv venv && . .venv/bin/activate && uv pip install -e .

# Runtime stage
FROM python:3.9-slim

WORKDIR /app

# Install uv
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && curl -LsSf https://astral.sh/uv/install.sh | sh

# Copy from builder
COPY --from=builder /app/.venv /app/.venv

# Copy application code
COPY apps/fastapi-app/ ./apps/fastapi-app/

# Set environment variables
ENV PYTHONPATH=/app
ENV PYTHONUNBUFFERED=1
ENV PATH="/app/.venv/bin:$PATH"

# Expose port
EXPOSE 8000

# Run the application
CMD ["uvicorn", "apps.fastapi-app.main:app", "--host", "0.0.0.0", "--port", "8000"] 