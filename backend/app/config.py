from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    OPENAI_API_KEY: Optional[str] = None
    DATABASE_URL: str = "sqlite:///./societal_hub.db"
    
    class Config:
        env_file = ".env"

settings = Settings()
